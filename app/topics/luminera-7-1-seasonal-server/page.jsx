import Luminera71SeasonalServerKeywordPage, { generateMetadata } from './luminera-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71SeasonalServerKeywordPage />;
}
