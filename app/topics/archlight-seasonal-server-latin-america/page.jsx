import ArchlightSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './archlight-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightSeasonalServerLatinAmericaKeywordPage />;
}
