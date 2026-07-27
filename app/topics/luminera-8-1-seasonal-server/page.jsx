import Luminera81SeasonalServerKeywordPage, { generateMetadata } from './luminera-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81SeasonalServerKeywordPage />;
}
