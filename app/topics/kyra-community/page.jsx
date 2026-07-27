import KyraCommunityKeywordPage, { generateMetadata } from './kyra-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraCommunityKeywordPage />;
}
