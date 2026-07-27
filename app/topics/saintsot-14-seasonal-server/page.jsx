import Saintsot14SeasonalServerKeywordPage, { generateMetadata } from './saintsot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot14SeasonalServerKeywordPage />;
}
