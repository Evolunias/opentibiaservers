import Tibiara15SeasonalServerKeywordPage, { generateMetadata } from './tibiara-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15SeasonalServerKeywordPage />;
}
