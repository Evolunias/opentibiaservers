import CustomDuraOnlineWikiKeywordPage, { generateMetadata } from './custom-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDuraOnlineWikiKeywordPage />;
}
