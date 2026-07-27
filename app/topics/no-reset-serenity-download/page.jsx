import NoResetSerenityDownloadKeywordPage, { generateMetadata } from './no-reset-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityDownloadKeywordPage />;
}
