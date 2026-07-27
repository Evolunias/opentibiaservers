import Miracle12SeasonalServerKeywordPage, { generateMetadata } from './miracle-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle12SeasonalServerKeywordPage />;
}
