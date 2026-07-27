import Realesta15SeasonalServerKeywordPage, { generateMetadata } from './realesta-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta15SeasonalServerKeywordPage />;
}
