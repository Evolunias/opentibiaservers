import NoResetShadowcoresWikiKeywordPage, { generateMetadata } from './no-reset-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresWikiKeywordPage />;
}
