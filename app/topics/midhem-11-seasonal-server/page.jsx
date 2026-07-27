import Midhem11SeasonalServerKeywordPage, { generateMetadata } from './midhem-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11SeasonalServerKeywordPage />;
}
