import Midhem74SeasonalServerKeywordPage, { generateMetadata } from './midhem-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem74SeasonalServerKeywordPage />;
}
