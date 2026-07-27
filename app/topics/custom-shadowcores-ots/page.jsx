import CustomShadowcoresOtsKeywordPage, { generateMetadata } from './custom-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresOtsKeywordPage />;
}
