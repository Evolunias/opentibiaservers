import LowrateBlazeraCreateAccountKeywordPage, { generateMetadata } from './lowrate-blazera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraCreateAccountKeywordPage />;
}
