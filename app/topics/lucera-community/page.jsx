import LuceraCommunityKeywordPage, { generateMetadata } from './lucera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraCommunityKeywordPage />;
}
