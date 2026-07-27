import ActiveShadowcoresLoginKeywordPage, { generateMetadata } from './active-shadowcores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresLoginKeywordPage />;
}
