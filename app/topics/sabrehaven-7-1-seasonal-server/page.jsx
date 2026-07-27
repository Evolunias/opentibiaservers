import Sabrehaven71SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven71SeasonalServerKeywordPage />;
}
