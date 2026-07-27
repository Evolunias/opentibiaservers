import Arcaniarl11SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl11SeasonalServerKeywordPage />;
}
