import ArchlightSeasonalServerEuropeKeywordPage, { generateMetadata } from './archlight-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightSeasonalServerEuropeKeywordPage />;
}
