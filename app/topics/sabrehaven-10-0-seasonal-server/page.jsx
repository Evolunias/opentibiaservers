import Sabrehaven100SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven100SeasonalServerKeywordPage />;
}
