import CelestaCommunityKeywordPage, { generateMetadata } from './celesta-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaCommunityKeywordPage />;
}
