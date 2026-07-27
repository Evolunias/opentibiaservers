import CustomSerenityWikiKeywordPage, { generateMetadata } from './custom-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityWikiKeywordPage />;
}
