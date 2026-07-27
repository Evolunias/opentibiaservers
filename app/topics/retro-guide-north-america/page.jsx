import RetroGuideNorthAmericaKeywordPage, { generateMetadata } from './retro-guide-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideNorthAmericaKeywordPage />;
}
