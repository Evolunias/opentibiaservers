import OfficialZezeniaOnlineServerKeywordPage, { generateMetadata } from './official-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineServerKeywordPage />;
}
