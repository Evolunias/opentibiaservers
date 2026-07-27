import Oldera86SeasonalServerKeywordPage, { generateMetadata } from './oldera-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86SeasonalServerKeywordPage />;
}
