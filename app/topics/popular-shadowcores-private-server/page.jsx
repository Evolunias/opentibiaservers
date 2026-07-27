import PopularShadowcoresPrivateServerKeywordPage, { generateMetadata } from './popular-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresPrivateServerKeywordPage />;
}
