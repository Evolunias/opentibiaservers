import Midhem12SeasonalServerKeywordPage, { generateMetadata } from './midhem-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12SeasonalServerKeywordPage />;
}
