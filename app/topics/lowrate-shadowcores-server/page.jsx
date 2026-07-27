import LowrateShadowcoresServerKeywordPage, { generateMetadata } from './lowrate-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresServerKeywordPage />;
}
