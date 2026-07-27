import OfficialZezeniaOnlineClientKeywordPage, { generateMetadata } from './official-zezenia-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineClientKeywordPage />;
}
