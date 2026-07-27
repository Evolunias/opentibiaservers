import Tibianus100SeasonalServerKeywordPage, { generateMetadata } from './tibianus-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus100SeasonalServerKeywordPage />;
}
