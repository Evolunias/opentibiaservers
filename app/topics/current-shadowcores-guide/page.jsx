import CurrentShadowcoresGuideKeywordPage, { generateMetadata } from './current-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresGuideKeywordPage />;
}
