import OxygenotCreateAccountKeywordPage, { generateMetadata } from './oxygenot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotCreateAccountKeywordPage />;
}
