import Evolera13SeasonalServerKeywordPage, { generateMetadata } from './evolera-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera13SeasonalServerKeywordPage />;
}
