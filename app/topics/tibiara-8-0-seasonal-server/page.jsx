import Tibiara80SeasonalServerKeywordPage, { generateMetadata } from './tibiara-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara80SeasonalServerKeywordPage />;
}
