import PopularDuraOnlineWikiKeywordPage, { generateMetadata } from './popular-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDuraOnlineWikiKeywordPage />;
}
