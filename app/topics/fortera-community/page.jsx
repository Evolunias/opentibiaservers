import ForteraCommunityKeywordPage, { generateMetadata } from './fortera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraCommunityKeywordPage />;
}
