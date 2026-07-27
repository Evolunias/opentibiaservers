import OfficialShadowcoresOtServerKeywordPage, { generateMetadata } from './official-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresOtServerKeywordPage />;
}
