import SeasonalLaunchUkKeywordPage, { generateMetadata } from './seasonal-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchUkKeywordPage />;
}
