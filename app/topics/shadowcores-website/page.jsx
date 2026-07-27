import ShadowcoresWebsiteKeywordPage, { generateMetadata } from './shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresWebsiteKeywordPage />;
}
