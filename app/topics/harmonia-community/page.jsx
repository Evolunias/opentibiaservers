import HarmoniaCommunityKeywordPage, { generateMetadata } from './harmonia-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaCommunityKeywordPage />;
}
