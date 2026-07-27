import Tibijka96SeasonalServerKeywordPage, { generateMetadata } from './tibijka-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka96SeasonalServerKeywordPage />;
}
