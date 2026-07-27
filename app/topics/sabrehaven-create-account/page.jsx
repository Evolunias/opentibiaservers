import SabrehavenCreateAccountKeywordPage, { generateMetadata } from './sabrehaven-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenCreateAccountKeywordPage />;
}
