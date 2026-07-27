import CurrentSabrehavenCreateAccountKeywordPage, { generateMetadata } from './current-sabrehaven-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenCreateAccountKeywordPage />;
}
