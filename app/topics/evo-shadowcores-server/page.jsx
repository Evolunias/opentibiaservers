import EvoShadowcoresServerKeywordPage, { generateMetadata } from './evo-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoShadowcoresServerKeywordPage />;
}
