import Classicus81SeasonalServerKeywordPage, { generateMetadata } from './classicus-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81SeasonalServerKeywordPage />;
}
