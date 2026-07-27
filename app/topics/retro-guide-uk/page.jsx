import RetroGuideUkKeywordPage, { generateMetadata } from './retro-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideUkKeywordPage />;
}
