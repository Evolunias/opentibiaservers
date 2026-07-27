import HighrateShadowcoresLoginKeywordPage, { generateMetadata } from './highrate-shadowcores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresLoginKeywordPage />;
}
