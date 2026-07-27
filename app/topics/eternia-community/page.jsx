import EterniaCommunityKeywordPage, { generateMetadata } from './eternia-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaCommunityKeywordPage />;
}
