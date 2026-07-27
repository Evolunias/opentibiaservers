import ActiveShadowcoresKeywordPage, { generateMetadata } from './active-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresKeywordPage />;
}
