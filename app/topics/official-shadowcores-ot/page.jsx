import OfficialShadowcoresOtKeywordPage, { generateMetadata } from './official-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresOtKeywordPage />;
}
