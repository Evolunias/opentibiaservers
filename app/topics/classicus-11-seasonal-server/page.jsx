import Classicus11SeasonalServerKeywordPage, { generateMetadata } from './classicus-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11SeasonalServerKeywordPage />;
}
