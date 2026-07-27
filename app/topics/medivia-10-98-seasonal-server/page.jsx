import Medivia1098SeasonalServerKeywordPage, { generateMetadata } from './medivia-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia1098SeasonalServerKeywordPage />;
}
