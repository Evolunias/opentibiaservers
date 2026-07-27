import Oldera74SeasonalServerKeywordPage, { generateMetadata } from './oldera-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera74SeasonalServerKeywordPage />;
}
