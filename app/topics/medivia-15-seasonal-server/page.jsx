import Medivia15SeasonalServerKeywordPage, { generateMetadata } from './medivia-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15SeasonalServerKeywordPage />;
}
