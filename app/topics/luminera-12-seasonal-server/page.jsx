import Luminera12SeasonalServerKeywordPage, { generateMetadata } from './luminera-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12SeasonalServerKeywordPage />;
}
