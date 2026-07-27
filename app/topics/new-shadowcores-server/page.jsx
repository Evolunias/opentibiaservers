import NewShadowcoresServerKeywordPage, { generateMetadata } from './new-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresServerKeywordPage />;
}
