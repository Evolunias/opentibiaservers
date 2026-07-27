import OfficialTibiaretroDownloadKeywordPage, { generateMetadata } from './official-tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroDownloadKeywordPage />;
}
