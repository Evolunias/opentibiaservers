import HighrateShadowcoresOtsKeywordPage, { generateMetadata } from './highrate-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresOtsKeywordPage />;
}
