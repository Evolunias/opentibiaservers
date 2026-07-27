import ActiveShadowcoresOtsKeywordPage, { generateMetadata } from './active-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresOtsKeywordPage />;
}
