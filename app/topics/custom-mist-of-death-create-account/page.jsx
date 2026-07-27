import CustomMistOfDeathCreateAccountKeywordPage, { generateMetadata } from './custom-mist-of-death-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathCreateAccountKeywordPage />;
}
