import Archlight11SeasonalServerKeywordPage, { generateMetadata } from './archlight-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11SeasonalServerKeywordPage />;
}
