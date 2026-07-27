import ActiveShadowcoresServerKeywordPage, { generateMetadata } from './active-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresServerKeywordPage />;
}
