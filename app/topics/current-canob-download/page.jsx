import CurrentCanobDownloadKeywordPage, { generateMetadata } from './current-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobDownloadKeywordPage />;
}
