import CurrentThorniaDownloadKeywordPage, { generateMetadata } from './current-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaDownloadKeywordPage />;
}
