import SeasonalLaunchUsaKeywordPage, { generateMetadata } from './seasonal-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchUsaKeywordPage />;
}
