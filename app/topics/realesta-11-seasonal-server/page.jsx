import Realesta11SeasonalServerKeywordPage, { generateMetadata } from './realesta-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11SeasonalServerKeywordPage />;
}
