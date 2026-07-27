import CurrentOtmadnessCreateAccountKeywordPage, { generateMetadata } from './current-otmadness-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessCreateAccountKeywordPage />;
}
