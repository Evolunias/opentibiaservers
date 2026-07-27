import Luminera13SeasonalServerKeywordPage, { generateMetadata } from './luminera-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13SeasonalServerKeywordPage />;
}
