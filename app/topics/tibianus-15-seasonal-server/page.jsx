import Tibianus15SeasonalServerKeywordPage, { generateMetadata } from './tibianus-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15SeasonalServerKeywordPage />;
}
