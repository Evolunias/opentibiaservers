import Medivia84SeasonalServerKeywordPage, { generateMetadata } from './medivia-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia84SeasonalServerKeywordPage />;
}
