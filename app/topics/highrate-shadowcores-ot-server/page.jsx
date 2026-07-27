import HighrateShadowcoresOtServerKeywordPage, { generateMetadata } from './highrate-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresOtServerKeywordPage />;
}
