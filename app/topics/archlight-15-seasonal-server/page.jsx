import Archlight15SeasonalServerKeywordPage, { generateMetadata } from './archlight-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15SeasonalServerKeywordPage />;
}
