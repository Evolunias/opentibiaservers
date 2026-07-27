import ActiveShadowcoresWebsiteKeywordPage, { generateMetadata } from './active-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresWebsiteKeywordPage />;
}
