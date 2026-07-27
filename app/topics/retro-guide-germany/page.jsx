import RetroGuideGermanyKeywordPage, { generateMetadata } from './retro-guide-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideGermanyKeywordPage />;
}
