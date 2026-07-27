import Sabrehaven14SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven14SeasonalServerKeywordPage />;
}
