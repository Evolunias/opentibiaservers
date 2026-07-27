import PvpeWikiNorthAmericaKeywordPage, { generateMetadata } from './pvpe-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiNorthAmericaKeywordPage />;
}
