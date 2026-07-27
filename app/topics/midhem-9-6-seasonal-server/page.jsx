import Midhem96SeasonalServerKeywordPage, { generateMetadata } from './midhem-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96SeasonalServerKeywordPage />;
}
