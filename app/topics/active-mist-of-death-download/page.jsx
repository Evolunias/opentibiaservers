import ActiveMistOfDeathDownloadKeywordPage, { generateMetadata } from './active-mist-of-death-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathDownloadKeywordPage />;
}
