import Classicus12SeasonalServerKeywordPage, { generateMetadata } from './classicus-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12SeasonalServerKeywordPage />;
}
