import Canob100SeasonalServerKeywordPage, { generateMetadata } from './canob-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob100SeasonalServerKeywordPage />;
}
