import Tibiame15SeasonalServerKeywordPage, { generateMetadata } from './tibiame-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15SeasonalServerKeywordPage />;
}
