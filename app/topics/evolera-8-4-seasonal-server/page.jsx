import Evolera84SeasonalServerKeywordPage, { generateMetadata } from './evolera-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera84SeasonalServerKeywordPage />;
}
