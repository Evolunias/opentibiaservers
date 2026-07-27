import Medivia86SeasonalServerKeywordPage, { generateMetadata } from './medivia-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia86SeasonalServerKeywordPage />;
}
