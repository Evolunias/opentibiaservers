import CustomLumineraDownloadKeywordPage, { generateMetadata } from './custom-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraDownloadKeywordPage />;
}
