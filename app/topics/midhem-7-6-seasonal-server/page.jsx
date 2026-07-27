import Midhem76SeasonalServerKeywordPage, { generateMetadata } from './midhem-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem76SeasonalServerKeywordPage />;
}
