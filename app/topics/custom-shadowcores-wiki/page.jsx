import CustomShadowcoresWikiKeywordPage, { generateMetadata } from './custom-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresWikiKeywordPage />;
}
