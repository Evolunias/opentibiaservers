import NeranaCommunityKeywordPage, { generateMetadata } from './nerana-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaCommunityKeywordPage />;
}
