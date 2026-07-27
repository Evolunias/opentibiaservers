import Midhem71SeasonalServerKeywordPage, { generateMetadata } from './midhem-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71SeasonalServerKeywordPage />;
}
