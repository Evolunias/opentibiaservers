import TitaniaCommunityKeywordPage, { generateMetadata } from './titania-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaCommunityKeywordPage />;
}
