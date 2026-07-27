import Tibianus96SeasonalServerKeywordPage, { generateMetadata } from './tibianus-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus96SeasonalServerKeywordPage />;
}
