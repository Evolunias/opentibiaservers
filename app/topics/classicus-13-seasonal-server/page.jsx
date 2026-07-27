import Classicus13SeasonalServerKeywordPage, { generateMetadata } from './classicus-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13SeasonalServerKeywordPage />;
}
