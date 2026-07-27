import NewShadowcoresOtServerKeywordPage, { generateMetadata } from './new-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresOtServerKeywordPage />;
}
