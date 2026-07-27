import Kasteria74SeasonalServerKeywordPage, { generateMetadata } from './kasteria-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria74SeasonalServerKeywordPage />;
}
