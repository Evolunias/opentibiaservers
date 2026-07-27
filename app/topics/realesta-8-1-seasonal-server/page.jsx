import Realesta81SeasonalServerKeywordPage, { generateMetadata } from './realesta-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta81SeasonalServerKeywordPage />;
}
