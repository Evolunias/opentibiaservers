import OfficialNepreniaCreateAccountKeywordPage, { generateMetadata } from './official-neprenia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaCreateAccountKeywordPage />;
}
