import Classicus80SeasonalServerKeywordPage, { generateMetadata } from './classicus-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80SeasonalServerKeywordPage />;
}
