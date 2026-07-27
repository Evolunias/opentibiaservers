import Oldera11SeasonalServerKeywordPage, { generateMetadata } from './oldera-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11SeasonalServerKeywordPage />;
}
