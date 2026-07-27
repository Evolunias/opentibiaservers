import Oldera84SeasonalServerKeywordPage, { generateMetadata } from './oldera-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera84SeasonalServerKeywordPage />;
}
