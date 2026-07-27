import Archlight84SeasonalServerKeywordPage, { generateMetadata } from './archlight-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight84SeasonalServerKeywordPage />;
}
