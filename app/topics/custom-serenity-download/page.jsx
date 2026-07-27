import CustomSerenityDownloadKeywordPage, { generateMetadata } from './custom-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityDownloadKeywordPage />;
}
