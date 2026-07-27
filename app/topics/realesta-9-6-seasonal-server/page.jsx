import Realesta96SeasonalServerKeywordPage, { generateMetadata } from './realesta-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta96SeasonalServerKeywordPage />;
}
