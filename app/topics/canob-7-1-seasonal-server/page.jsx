import Canob71SeasonalServerKeywordPage, { generateMetadata } from './canob-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob71SeasonalServerKeywordPage />;
}
