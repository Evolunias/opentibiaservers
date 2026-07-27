import ReneraCommunityKeywordPage, { generateMetadata } from './renera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraCommunityKeywordPage />;
}
