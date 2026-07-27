import RetroGuideBrazilKeywordPage, { generateMetadata } from './retro-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideBrazilKeywordPage />;
}
