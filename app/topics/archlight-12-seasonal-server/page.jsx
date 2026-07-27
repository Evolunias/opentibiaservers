import Archlight12SeasonalServerKeywordPage, { generateMetadata } from './archlight-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12SeasonalServerKeywordPage />;
}
