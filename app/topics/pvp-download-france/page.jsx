import PvpDownloadFranceKeywordPage, { generateMetadata } from './pvp-download-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDownloadFranceKeywordPage />;
}
