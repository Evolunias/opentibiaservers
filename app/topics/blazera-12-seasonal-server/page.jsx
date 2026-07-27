import Blazera12SeasonalServerKeywordPage, { generateMetadata } from './blazera-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12SeasonalServerKeywordPage />;
}
