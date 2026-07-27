import PopularShadowcoresClientKeywordPage, { generateMetadata } from './popular-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresClientKeywordPage />;
}
