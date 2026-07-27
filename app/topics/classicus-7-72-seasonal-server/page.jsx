import Classicus772SeasonalServerKeywordPage, { generateMetadata } from './classicus-7-72-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus772SeasonalServerKeywordPage />;
}
