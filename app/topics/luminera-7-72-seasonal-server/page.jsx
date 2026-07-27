import Luminera772SeasonalServerKeywordPage, { generateMetadata } from './luminera-7-72-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera772SeasonalServerKeywordPage />;
}
