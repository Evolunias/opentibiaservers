import CustomTibiameDownloadKeywordPage, { generateMetadata } from './custom-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameDownloadKeywordPage />;
}
