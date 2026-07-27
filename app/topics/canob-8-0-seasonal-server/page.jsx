import Canob80SeasonalServerKeywordPage, { generateMetadata } from './canob-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob80SeasonalServerKeywordPage />;
}
