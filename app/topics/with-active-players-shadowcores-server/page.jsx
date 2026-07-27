import WithActivePlayersShadowcoresServerKeywordPage, { generateMetadata } from './with-active-players-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersShadowcoresServerKeywordPage />;
}
