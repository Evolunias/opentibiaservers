import Kasteria1098SeasonalServerKeywordPage, { generateMetadata } from './kasteria-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria1098SeasonalServerKeywordPage />;
}
