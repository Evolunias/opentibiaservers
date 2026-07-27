import Medivia13SeasonalServerKeywordPage, { generateMetadata } from './medivia-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13SeasonalServerKeywordPage />;
}
