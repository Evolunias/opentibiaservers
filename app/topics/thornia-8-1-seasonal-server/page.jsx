import Thornia81SeasonalServerKeywordPage, { generateMetadata } from './thornia-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81SeasonalServerKeywordPage />;
}
