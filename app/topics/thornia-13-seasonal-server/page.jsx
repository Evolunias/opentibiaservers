import Thornia13SeasonalServerKeywordPage, { generateMetadata } from './thornia-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13SeasonalServerKeywordPage />;
}
