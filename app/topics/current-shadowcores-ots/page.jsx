import CurrentShadowcoresOtsKeywordPage, { generateMetadata } from './current-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresOtsKeywordPage />;
}
