import Medivia81SeasonalServerKeywordPage, { generateMetadata } from './medivia-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia81SeasonalServerKeywordPage />;
}
