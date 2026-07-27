import CustomSabrehavenDownloadKeywordPage, { generateMetadata } from './custom-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenDownloadKeywordPage />;
}
