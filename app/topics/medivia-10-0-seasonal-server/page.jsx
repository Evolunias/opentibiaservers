import Medivia100SeasonalServerKeywordPage, { generateMetadata } from './medivia-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia100SeasonalServerKeywordPage />;
}
