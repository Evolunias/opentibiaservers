import Luminera86SeasonalServerKeywordPage, { generateMetadata } from './luminera-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86SeasonalServerKeywordPage />;
}
