import SeasonalMadnessaliveServerKeywordPage, { generateMetadata } from './seasonal-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalMadnessaliveServerKeywordPage />;
}
