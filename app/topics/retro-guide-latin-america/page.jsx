import RetroGuideLatinAmericaKeywordPage, { generateMetadata } from './retro-guide-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideLatinAmericaKeywordPage />;
}
