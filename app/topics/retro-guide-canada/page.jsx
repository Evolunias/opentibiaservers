import RetroGuideCanadaKeywordPage, { generateMetadata } from './retro-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideCanadaKeywordPage />;
}
