import HighrateShadowcoresServerKeywordPage, { generateMetadata } from './highrate-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresServerKeywordPage />;
}
