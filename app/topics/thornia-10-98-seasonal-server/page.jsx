import Thornia1098SeasonalServerKeywordPage, { generateMetadata } from './thornia-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia1098SeasonalServerKeywordPage />;
}
