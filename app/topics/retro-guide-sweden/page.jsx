import RetroGuideSwedenKeywordPage, { generateMetadata } from './retro-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideSwedenKeywordPage />;
}
