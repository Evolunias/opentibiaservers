import Archlight80SeasonalServerKeywordPage, { generateMetadata } from './archlight-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80SeasonalServerKeywordPage />;
}
