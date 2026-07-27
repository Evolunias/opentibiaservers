import CustomThorniaWikiKeywordPage, { generateMetadata } from './custom-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaWikiKeywordPage />;
}
