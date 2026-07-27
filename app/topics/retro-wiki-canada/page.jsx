import RetroWikiCanadaKeywordPage, { generateMetadata } from './retro-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiCanadaKeywordPage />;
}
