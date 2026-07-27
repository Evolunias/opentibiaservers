import NonPvpShadowcoresServerKeywordPage, { generateMetadata } from './non-pvp-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpShadowcoresServerKeywordPage />;
}
