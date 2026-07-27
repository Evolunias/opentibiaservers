import Sabrehaven13SeasonalServerKeywordPage, { generateMetadata } from './sabrehaven-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13SeasonalServerKeywordPage />;
}
