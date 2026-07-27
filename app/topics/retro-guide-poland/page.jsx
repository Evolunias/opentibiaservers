import RetroGuidePolandKeywordPage, { generateMetadata } from './retro-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuidePolandKeywordPage />;
}
