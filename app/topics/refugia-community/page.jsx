import RefugiaCommunityKeywordPage, { generateMetadata } from './refugia-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaCommunityKeywordPage />;
}
