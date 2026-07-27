import Tibianus80SeasonalServerKeywordPage, { generateMetadata } from './tibianus-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus80SeasonalServerKeywordPage />;
}
