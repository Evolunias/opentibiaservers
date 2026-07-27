import Miracle14SeasonalServerKeywordPage, { generateMetadata } from './miracle-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle14SeasonalServerKeywordPage />;
}
