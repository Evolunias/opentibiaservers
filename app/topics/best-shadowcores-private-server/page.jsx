import BestShadowcoresPrivateServerKeywordPage, { generateMetadata } from './best-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresPrivateServerKeywordPage />;
}
