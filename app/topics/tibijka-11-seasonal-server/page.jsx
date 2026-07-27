import Tibijka11SeasonalServerKeywordPage, { generateMetadata } from './tibijka-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11SeasonalServerKeywordPage />;
}
