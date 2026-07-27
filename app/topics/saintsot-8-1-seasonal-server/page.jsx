import Saintsot81SeasonalServerKeywordPage, { generateMetadata } from './saintsot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot81SeasonalServerKeywordPage />;
}
