import Evolera12SeasonalServerKeywordPage, { generateMetadata } from './evolera-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera12SeasonalServerKeywordPage />;
}
