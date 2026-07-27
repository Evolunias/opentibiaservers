import PvpeWikiUsaKeywordPage, { generateMetadata } from './pvpe-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiUsaKeywordPage />;
}
