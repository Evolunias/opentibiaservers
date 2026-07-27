import Classicus96SeasonalServerKeywordPage, { generateMetadata } from './classicus-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96SeasonalServerKeywordPage />;
}
