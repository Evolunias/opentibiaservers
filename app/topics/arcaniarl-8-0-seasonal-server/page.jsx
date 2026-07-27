import Arcaniarl80SeasonalServerKeywordPage, { generateMetadata } from './arcaniarl-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl80SeasonalServerKeywordPage />;
}
