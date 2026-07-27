import PvpeWikiPolandKeywordPage, { generateMetadata } from './pvpe-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiPolandKeywordPage />;
}
