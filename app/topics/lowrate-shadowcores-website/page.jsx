import LowrateShadowcoresWebsiteKeywordPage, { generateMetadata } from './lowrate-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresWebsiteKeywordPage />;
}
