import Tibiame96SeasonalServerKeywordPage, { generateMetadata } from './tibiame-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame96SeasonalServerKeywordPage />;
}
