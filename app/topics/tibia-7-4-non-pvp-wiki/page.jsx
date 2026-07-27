import Tibia74NonPvpWikiKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpWikiKeywordPage />;
}
