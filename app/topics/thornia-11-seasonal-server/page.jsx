import Thornia11SeasonalServerKeywordPage, { generateMetadata } from './thornia-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11SeasonalServerKeywordPage />;
}
