import RetroGuideFranceKeywordPage, { generateMetadata } from './retro-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideFranceKeywordPage />;
}
