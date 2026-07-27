import OfficialDuraOnlineLoginKeywordPage, { generateMetadata } from './official-dura-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDuraOnlineLoginKeywordPage />;
}
