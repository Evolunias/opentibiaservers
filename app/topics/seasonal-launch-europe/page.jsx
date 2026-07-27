import SeasonalLaunchEuropeKeywordPage, { generateMetadata } from './seasonal-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchEuropeKeywordPage />;
}
