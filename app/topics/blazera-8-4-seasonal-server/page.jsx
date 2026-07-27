import Blazera84SeasonalServerKeywordPage, { generateMetadata } from './blazera-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera84SeasonalServerKeywordPage />;
}
