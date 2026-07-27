import Midhem86SeasonalServerKeywordPage, { generateMetadata } from './midhem-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem86SeasonalServerKeywordPage />;
}
