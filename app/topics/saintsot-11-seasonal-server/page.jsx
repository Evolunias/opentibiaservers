import Saintsot11SeasonalServerKeywordPage, { generateMetadata } from './saintsot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11SeasonalServerKeywordPage />;
}
