import OfficialArchlightOfficialKeywordPage, { generateMetadata } from './official-archlight-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightOfficialKeywordPage />;
}
