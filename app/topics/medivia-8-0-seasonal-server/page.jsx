import Medivia80SeasonalServerKeywordPage, { generateMetadata } from './medivia-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia80SeasonalServerKeywordPage />;
}
