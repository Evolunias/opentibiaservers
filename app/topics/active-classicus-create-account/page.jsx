import ActiveClassicusCreateAccountKeywordPage, { generateMetadata } from './active-classicus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusCreateAccountKeywordPage />;
}
