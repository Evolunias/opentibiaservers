import SeasonalLaunchPolandKeywordPage, { generateMetadata } from './seasonal-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchPolandKeywordPage />;
}
