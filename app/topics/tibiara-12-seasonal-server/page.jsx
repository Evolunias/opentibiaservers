import Tibiara12SeasonalServerKeywordPage, { generateMetadata } from './tibiara-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12SeasonalServerKeywordPage />;
}
