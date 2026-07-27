import Tibiara84SeasonalServerKeywordPage, { generateMetadata } from './tibiara-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara84SeasonalServerKeywordPage />;
}
