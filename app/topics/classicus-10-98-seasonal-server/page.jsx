import Classicus1098SeasonalServerKeywordPage, { generateMetadata } from './classicus-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098SeasonalServerKeywordPage />;
}
