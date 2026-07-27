import ActiveShadowcoresPrivateServerKeywordPage, { generateMetadata } from './active-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresPrivateServerKeywordPage />;
}
