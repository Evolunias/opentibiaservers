import Ameria96SeasonalServerKeywordPage, { generateMetadata } from './ameria-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria96SeasonalServerKeywordPage />;
}
