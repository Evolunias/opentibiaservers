import Midhem84SeasonalServerKeywordPage, { generateMetadata } from './midhem-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem84SeasonalServerKeywordPage />;
}
