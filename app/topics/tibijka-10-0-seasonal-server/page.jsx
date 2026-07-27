import Tibijka100SeasonalServerKeywordPage, { generateMetadata } from './tibijka-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka100SeasonalServerKeywordPage />;
}
