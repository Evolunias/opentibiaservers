import Realesta12SeasonalServerKeywordPage, { generateMetadata } from './realesta-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12SeasonalServerKeywordPage />;
}
