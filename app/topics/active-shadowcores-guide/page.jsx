import ActiveShadowcoresGuideKeywordPage, { generateMetadata } from './active-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresGuideKeywordPage />;
}
