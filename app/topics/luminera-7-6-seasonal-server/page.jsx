import Luminera76SeasonalServerKeywordPage, { generateMetadata } from './luminera-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76SeasonalServerKeywordPage />;
}
