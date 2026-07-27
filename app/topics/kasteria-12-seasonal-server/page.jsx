import Kasteria12SeasonalServerKeywordPage, { generateMetadata } from './kasteria-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12SeasonalServerKeywordPage />;
}
