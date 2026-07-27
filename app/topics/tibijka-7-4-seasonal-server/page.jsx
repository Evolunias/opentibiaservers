import Tibijka74SeasonalServerKeywordPage, { generateMetadata } from './tibijka-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka74SeasonalServerKeywordPage />;
}
