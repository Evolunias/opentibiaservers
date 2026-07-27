import Realesta86SeasonalServerKeywordPage, { generateMetadata } from './realesta-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta86SeasonalServerKeywordPage />;
}
