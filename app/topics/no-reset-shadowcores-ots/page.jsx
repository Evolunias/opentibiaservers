import NoResetShadowcoresOtsKeywordPage, { generateMetadata } from './no-reset-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresOtsKeywordPage />;
}
