import Medivia11SeasonalServerKeywordPage, { generateMetadata } from './medivia-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11SeasonalServerKeywordPage />;
}
