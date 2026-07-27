import LowExpShadowcoresServerKeywordPage, { generateMetadata } from './low-exp-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpShadowcoresServerKeywordPage />;
}
