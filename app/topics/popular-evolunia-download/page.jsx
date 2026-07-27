import PopularEvoluniaDownloadKeywordPage, { generateMetadata } from './popular-evolunia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaDownloadKeywordPage />;
}
