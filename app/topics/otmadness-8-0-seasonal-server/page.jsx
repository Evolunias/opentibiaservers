import Otmadness80SeasonalServerKeywordPage, { generateMetadata } from './otmadness-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness80SeasonalServerKeywordPage />;
}
