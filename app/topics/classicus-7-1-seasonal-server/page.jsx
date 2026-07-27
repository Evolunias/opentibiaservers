import Classicus71SeasonalServerKeywordPage, { generateMetadata } from './classicus-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71SeasonalServerKeywordPage />;
}
