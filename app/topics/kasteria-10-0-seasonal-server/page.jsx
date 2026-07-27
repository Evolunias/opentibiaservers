import Kasteria100SeasonalServerKeywordPage, { generateMetadata } from './kasteria-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria100SeasonalServerKeywordPage />;
}
