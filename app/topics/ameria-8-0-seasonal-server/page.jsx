import Ameria80SeasonalServerKeywordPage, { generateMetadata } from './ameria-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria80SeasonalServerKeywordPage />;
}
