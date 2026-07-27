import LowrateSabrehavenDownloadKeywordPage, { generateMetadata } from './lowrate-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenDownloadKeywordPage />;
}
