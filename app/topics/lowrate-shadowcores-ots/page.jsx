import LowrateShadowcoresOtsKeywordPage, { generateMetadata } from './lowrate-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresOtsKeywordPage />;
}
