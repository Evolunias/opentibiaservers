import Luminera1098SeasonalServerKeywordPage, { generateMetadata } from './luminera-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera1098SeasonalServerKeywordPage />;
}
