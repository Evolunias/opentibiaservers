import Realesta80SeasonalServerKeywordPage, { generateMetadata } from './realesta-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta80SeasonalServerKeywordPage />;
}
