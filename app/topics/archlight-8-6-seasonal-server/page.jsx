import Archlight86SeasonalServerKeywordPage, { generateMetadata } from './archlight-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight86SeasonalServerKeywordPage />;
}
