import Arcaniarl15SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl15SeasonalServerKeywordPage />;
}
