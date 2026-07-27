import Saintsot86SeasonalServerKeywordPage, { generateMetadata } from './saintsot-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot86SeasonalServerKeywordPage />;
}
