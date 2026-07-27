import NewShadowcoresOfficialKeywordPage, { generateMetadata } from './new-shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresOfficialKeywordPage />;
}
