import Realesta84SeasonalServerKeywordPage, { generateMetadata } from './realesta-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta84SeasonalServerKeywordPage />;
}
