import Classicus76SeasonalServerKeywordPage, { generateMetadata } from './classicus-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus76SeasonalServerKeywordPage />;
}
