import Thornia14SeasonalServerKeywordPage, { generateMetadata } from './thornia-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14SeasonalServerKeywordPage />;
}
