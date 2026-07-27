import RetroGuideArgentinaKeywordPage, { generateMetadata } from './retro-guide-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideArgentinaKeywordPage />;
}
