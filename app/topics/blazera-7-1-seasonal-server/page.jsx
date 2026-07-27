import Blazera71SeasonalServerKeywordPage, { generateMetadata } from './blazera-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera71SeasonalServerKeywordPage />;
}
