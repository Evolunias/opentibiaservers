import OfficialArchlightLoginKeywordPage, { generateMetadata } from './official-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightLoginKeywordPage />;
}
