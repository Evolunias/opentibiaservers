import Canob96SeasonalServerKeywordPage, { generateMetadata } from './canob-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob96SeasonalServerKeywordPage />;
}
