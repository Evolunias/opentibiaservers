import NewShadowcoresRegisterKeywordPage, { generateMetadata } from './new-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresRegisterKeywordPage />;
}
