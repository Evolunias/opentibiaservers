import ActiveLumineraCreateAccountKeywordPage, { generateMetadata } from './active-luminera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraCreateAccountKeywordPage />;
}
