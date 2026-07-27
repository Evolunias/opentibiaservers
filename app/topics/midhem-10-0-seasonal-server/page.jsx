import Midhem100SeasonalServerKeywordPage, { generateMetadata } from './midhem-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem100SeasonalServerKeywordPage />;
}
