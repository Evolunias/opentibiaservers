import CurrentShadowcoresPrivateServerKeywordPage, { generateMetadata } from './current-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresPrivateServerKeywordPage />;
}
