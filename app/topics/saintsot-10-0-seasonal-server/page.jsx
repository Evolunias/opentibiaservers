import Saintsot100SeasonalServerKeywordPage, { generateMetadata } from './saintsot-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot100SeasonalServerKeywordPage />;
}
