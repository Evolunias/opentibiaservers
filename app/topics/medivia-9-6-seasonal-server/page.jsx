import Medivia96SeasonalServerKeywordPage, { generateMetadata } from './medivia-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96SeasonalServerKeywordPage />;
}
