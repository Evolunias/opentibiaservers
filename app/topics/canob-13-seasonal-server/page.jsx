import Canob13SeasonalServerKeywordPage, { generateMetadata } from './canob-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13SeasonalServerKeywordPage />;
}
