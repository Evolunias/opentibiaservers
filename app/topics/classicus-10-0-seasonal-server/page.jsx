import Classicus100SeasonalServerKeywordPage, { generateMetadata } from './classicus-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100SeasonalServerKeywordPage />;
}
