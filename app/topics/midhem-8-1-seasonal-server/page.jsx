import Midhem81SeasonalServerKeywordPage, { generateMetadata } from './midhem-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81SeasonalServerKeywordPage />;
}
