import Sabrehaven11SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11SeasonalServerKeywordPage />;
}
