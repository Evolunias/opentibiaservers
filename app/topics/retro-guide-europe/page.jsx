import RetroGuideEuropeKeywordPage, { generateMetadata } from './retro-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideEuropeKeywordPage />;
}
