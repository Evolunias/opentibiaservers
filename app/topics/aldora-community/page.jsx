import AldoraCommunityKeywordPage, { generateMetadata } from './aldora-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraCommunityKeywordPage />;
}
