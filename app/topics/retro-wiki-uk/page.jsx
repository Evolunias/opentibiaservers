import RetroWikiUkKeywordPage, { generateMetadata } from './retro-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiUkKeywordPage />;
}
