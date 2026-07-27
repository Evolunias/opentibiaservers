import PopularShadowcoresKeywordPage, { generateMetadata } from './popular-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresKeywordPage />;
}
