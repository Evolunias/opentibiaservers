import Archlight96SeasonalServerKeywordPage, { generateMetadata } from './archlight-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight96SeasonalServerKeywordPage />;
}
