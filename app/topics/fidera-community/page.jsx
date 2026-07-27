import FideraCommunityKeywordPage, { generateMetadata } from './fidera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraCommunityKeywordPage />;
}
