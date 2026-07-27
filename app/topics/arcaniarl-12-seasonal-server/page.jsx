import Arcaniarl12SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl12SeasonalServerKeywordPage />;
}
