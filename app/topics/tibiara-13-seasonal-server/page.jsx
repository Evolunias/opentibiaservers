import Tibiara13SeasonalServerKeywordPage, { generateMetadata } from './tibiara-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13SeasonalServerKeywordPage />;
}
