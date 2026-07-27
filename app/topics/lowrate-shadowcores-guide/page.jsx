import LowrateShadowcoresGuideKeywordPage, { generateMetadata } from './lowrate-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresGuideKeywordPage />;
}
