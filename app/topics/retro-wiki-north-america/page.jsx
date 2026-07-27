import RetroWikiNorthAmericaKeywordPage, { generateMetadata } from './retro-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiNorthAmericaKeywordPage />;
}
