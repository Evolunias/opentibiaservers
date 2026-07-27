import Tibianus13SeasonalServerKeywordPage, { generateMetadata } from './tibianus-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13SeasonalServerKeywordPage />;
}
