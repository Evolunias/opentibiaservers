import PopularShadowcoresWebsiteKeywordPage, { generateMetadata } from './popular-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresWebsiteKeywordPage />;
}
