import Canob15SeasonalServerKeywordPage, { generateMetadata } from './canob-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15SeasonalServerKeywordPage />;
}
