import ActiveShadowcoresOtServerKeywordPage, { generateMetadata } from './active-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresOtServerKeywordPage />;
}
