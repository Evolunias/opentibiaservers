import PopularShadowcoresLoginKeywordPage, { generateMetadata } from './popular-shadowcores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresLoginKeywordPage />;
}
