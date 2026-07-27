import BlazeraCreateAccountKeywordPage, { generateMetadata } from './blazera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCreateAccountKeywordPage />;
}
