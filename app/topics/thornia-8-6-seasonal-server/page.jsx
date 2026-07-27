import Thornia86SeasonalServerKeywordPage, { generateMetadata } from './thornia-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86SeasonalServerKeywordPage />;
}
