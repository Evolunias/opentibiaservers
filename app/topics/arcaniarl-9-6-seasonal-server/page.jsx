import Arcaniarl96SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl96SeasonalServerKeywordPage />;
}
