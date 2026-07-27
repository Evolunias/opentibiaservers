import RetroGuideMexicoKeywordPage, { generateMetadata } from './retro-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideMexicoKeywordPage />;
}
