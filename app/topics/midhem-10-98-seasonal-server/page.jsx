import Midhem1098SeasonalServerKeywordPage, { generateMetadata } from './midhem-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem1098SeasonalServerKeywordPage />;
}
