import FreshStartShadowcoresRegisterKeywordPage, { generateMetadata } from './fresh-start-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresRegisterKeywordPage />;
}
