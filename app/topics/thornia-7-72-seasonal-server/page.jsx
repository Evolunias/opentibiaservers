import Thornia772SeasonalServerKeywordPage, { generateMetadata } from './thornia-7-72-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia772SeasonalServerKeywordPage />;
}
