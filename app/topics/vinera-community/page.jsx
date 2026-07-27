import VineraCommunityKeywordPage, { generateMetadata } from './vinera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraCommunityKeywordPage />;
}
