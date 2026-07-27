import TopEvoluniaDownloadKeywordPage, { generateMetadata } from './top-evolunia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaDownloadKeywordPage />;
}
