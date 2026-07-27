import NewSeasonShadowcoresPrivateServerKeywordPage, { generateMetadata } from './new-season-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresPrivateServerKeywordPage />;
}
