import Midhem772SeasonalServerKeywordPage, { generateMetadata } from './midhem-7-72-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem772SeasonalServerKeywordPage />;
}
