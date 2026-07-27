import FreshStartShadowcoresPrivateServerKeywordPage, { generateMetadata } from './fresh-start-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresPrivateServerKeywordPage />;
}
