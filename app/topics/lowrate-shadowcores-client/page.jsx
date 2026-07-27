import LowrateShadowcoresClientKeywordPage, { generateMetadata } from './lowrate-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresClientKeywordPage />;
}
