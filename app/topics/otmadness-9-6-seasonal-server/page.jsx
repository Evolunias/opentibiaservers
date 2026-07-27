import Otmadness96SeasonalServerKeywordPage, { generateMetadata } from './otmadness-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness96SeasonalServerKeywordPage />;
}
