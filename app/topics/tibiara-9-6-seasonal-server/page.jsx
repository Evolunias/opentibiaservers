import Tibiara96SeasonalServerKeywordPage, { generateMetadata } from './tibiara-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara96SeasonalServerKeywordPage />;
}
