import Thornia84SeasonalServerKeywordPage, { generateMetadata } from './thornia-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84SeasonalServerKeywordPage />;
}
