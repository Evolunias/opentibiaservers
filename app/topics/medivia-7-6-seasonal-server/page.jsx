import Medivia76SeasonalServerKeywordPage, { generateMetadata } from './medivia-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia76SeasonalServerKeywordPage />;
}
