import ClassicusCreateAccountKeywordPage, { generateMetadata } from './classicus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusCreateAccountKeywordPage />;
}
