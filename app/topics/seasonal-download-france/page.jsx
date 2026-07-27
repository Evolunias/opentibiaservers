import SeasonalDownloadFranceKeywordPage, { generateMetadata } from './seasonal-download-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDownloadFranceKeywordPage />;
}
