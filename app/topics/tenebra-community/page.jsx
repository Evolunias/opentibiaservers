import TenebraCommunityKeywordPage, { generateMetadata } from './tenebra-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraCommunityKeywordPage />;
}
