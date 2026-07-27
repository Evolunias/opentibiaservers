import LowrateShadowcoresOtKeywordPage, { generateMetadata } from './lowrate-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresOtKeywordPage />;
}
