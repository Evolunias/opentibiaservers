import SeasonalLaunchBrazilKeywordPage, { generateMetadata } from './seasonal-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchBrazilKeywordPage />;
}
