import Kasteria86SeasonalServerKeywordPage, { generateMetadata } from './kasteria-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86SeasonalServerKeywordPage />;
}
