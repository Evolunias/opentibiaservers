import SaintsotCreateAccountKeywordPage, { generateMetadata } from './saintsot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCreateAccountKeywordPage />;
}
