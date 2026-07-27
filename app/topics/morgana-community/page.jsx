import MorganaCommunityKeywordPage, { generateMetadata } from './morgana-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaCommunityKeywordPage />;
}
