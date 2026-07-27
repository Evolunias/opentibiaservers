import OfficialShadowcoresPrivateServerKeywordPage, { generateMetadata } from './official-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresPrivateServerKeywordPage />;
}
