import Evolera71SeasonalServerKeywordPage, { generateMetadata } from './evolera-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera71SeasonalServerKeywordPage />;
}
