import Midhem13SeasonalServerKeywordPage, { generateMetadata } from './midhem-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13SeasonalServerKeywordPage />;
}
