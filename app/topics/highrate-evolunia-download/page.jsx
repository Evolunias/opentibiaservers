import HighrateEvoluniaDownloadKeywordPage, { generateMetadata } from './highrate-evolunia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaDownloadKeywordPage />;
}
