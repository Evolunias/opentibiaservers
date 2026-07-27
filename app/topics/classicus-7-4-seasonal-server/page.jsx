import Classicus74SeasonalServerKeywordPage, { generateMetadata } from './classicus-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74SeasonalServerKeywordPage />;
}
