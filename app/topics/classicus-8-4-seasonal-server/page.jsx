import Classicus84SeasonalServerKeywordPage, { generateMetadata } from './classicus-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus84SeasonalServerKeywordPage />;
}
