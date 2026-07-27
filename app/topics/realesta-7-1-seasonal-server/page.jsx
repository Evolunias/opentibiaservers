import Realesta71SeasonalServerKeywordPage, { generateMetadata } from './realesta-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta71SeasonalServerKeywordPage />;
}
