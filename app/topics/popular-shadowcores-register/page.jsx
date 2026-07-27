import PopularShadowcoresRegisterKeywordPage, { generateMetadata } from './popular-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresRegisterKeywordPage />;
}
