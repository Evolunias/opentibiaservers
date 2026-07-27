import Sabrehaven81SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven81SeasonalServerKeywordPage />;
}
