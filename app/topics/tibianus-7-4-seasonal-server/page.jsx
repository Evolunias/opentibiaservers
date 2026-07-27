import Tibianus74SeasonalServerKeywordPage, { generateMetadata } from './tibianus-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus74SeasonalServerKeywordPage />;
}
