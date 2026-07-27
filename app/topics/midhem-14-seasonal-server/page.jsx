import Midhem14SeasonalServerKeywordPage, { generateMetadata } from './midhem-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14SeasonalServerKeywordPage />;
}
