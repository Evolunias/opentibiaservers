import RetroSeasonSwedenKeywordPage, { generateMetadata } from './retro-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonSwedenKeywordPage />;
}
