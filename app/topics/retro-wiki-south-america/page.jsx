import RetroWikiSouthAmericaKeywordPage, { generateMetadata } from './retro-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiSouthAmericaKeywordPage />;
}
