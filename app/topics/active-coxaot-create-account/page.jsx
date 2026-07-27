import ActiveCoxaotCreateAccountKeywordPage, { generateMetadata } from './active-coxaot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotCreateAccountKeywordPage />;
}
