import TibijkaCreateAccountKeywordPage, { generateMetadata } from './tibijka-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaCreateAccountKeywordPage />;
}
