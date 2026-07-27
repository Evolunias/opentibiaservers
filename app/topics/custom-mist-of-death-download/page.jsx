import CustomMistOfDeathDownloadKeywordPage, { generateMetadata } from './custom-mist-of-death-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathDownloadKeywordPage />;
}
