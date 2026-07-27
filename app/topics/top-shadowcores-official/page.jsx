import TopShadowcoresOfficialKeywordPage, { generateMetadata } from './top-shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresOfficialKeywordPage />;
}
