import MadnessaliveMarketKeywordPage, { generateMetadata } from './madnessalive-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveMarketKeywordPage />;
}
