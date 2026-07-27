import Arcaniarl13SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl13SeasonalServerKeywordPage />;
}
