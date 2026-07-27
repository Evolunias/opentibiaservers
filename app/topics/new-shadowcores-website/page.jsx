import NewShadowcoresWebsiteKeywordPage, { generateMetadata } from './new-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresWebsiteKeywordPage />;
}
