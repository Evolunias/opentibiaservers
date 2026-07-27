import Luminera11SeasonalServerKeywordPage, { generateMetadata } from './luminera-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11SeasonalServerKeywordPage />;
}
