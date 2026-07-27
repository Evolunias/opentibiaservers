import OfficialAlasteraCreateAccountKeywordPage, { generateMetadata } from './official-alastera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraCreateAccountKeywordPage />;
}
