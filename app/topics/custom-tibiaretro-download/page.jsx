import CustomTibiaretroDownloadKeywordPage, { generateMetadata } from './custom-tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroDownloadKeywordPage />;
}
