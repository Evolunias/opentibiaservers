import LowrateShadowcoresPrivateServerKeywordPage, { generateMetadata } from './lowrate-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresPrivateServerKeywordPage />;
}
