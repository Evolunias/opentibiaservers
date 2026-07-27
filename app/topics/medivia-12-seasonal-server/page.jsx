import Medivia12SeasonalServerKeywordPage, { generateMetadata } from './medivia-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12SeasonalServerKeywordPage />;
}
