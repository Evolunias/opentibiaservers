import CurrentShadowcoresWebsiteKeywordPage, { generateMetadata } from './current-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresWebsiteKeywordPage />;
}
