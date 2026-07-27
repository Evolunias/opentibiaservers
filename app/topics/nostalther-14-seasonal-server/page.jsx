import Nostalther14SeasonalServerKeywordPage, { generateMetadata } from './nostalther-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther14SeasonalServerKeywordPage />;
}
