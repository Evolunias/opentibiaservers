import NoResetShadowcoresGuideKeywordPage, { generateMetadata } from './no-reset-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresGuideKeywordPage />;
}
