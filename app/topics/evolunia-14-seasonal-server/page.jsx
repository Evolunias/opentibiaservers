import Evolunia14SeasonalServerKeywordPage, { generateMetadata } from './evolunia-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia14SeasonalServerKeywordPage />;
}
