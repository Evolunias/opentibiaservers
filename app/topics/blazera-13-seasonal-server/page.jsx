import Blazera13SeasonalServerKeywordPage, { generateMetadata } from './blazera-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera13SeasonalServerKeywordPage />;
}
