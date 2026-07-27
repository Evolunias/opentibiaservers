import Luminera14SeasonalServerKeywordPage, { generateMetadata } from './luminera-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14SeasonalServerKeywordPage />;
}
