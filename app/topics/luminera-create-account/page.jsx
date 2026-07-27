import LumineraCreateAccountKeywordPage, { generateMetadata } from './luminera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCreateAccountKeywordPage />;
}
