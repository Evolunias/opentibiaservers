import NewShadowcoresLoginKeywordPage, { generateMetadata } from './new-shadowcores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresLoginKeywordPage />;
}
