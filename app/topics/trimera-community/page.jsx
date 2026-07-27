import TrimeraCommunityKeywordPage, { generateMetadata } from './trimera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraCommunityKeywordPage />;
}
