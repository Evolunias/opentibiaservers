import OfficialShadowcoresWebsiteKeywordPage, { generateMetadata } from './official-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresWebsiteKeywordPage />;
}
