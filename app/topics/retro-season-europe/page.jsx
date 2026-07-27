import RetroSeasonEuropeKeywordPage, { generateMetadata } from './retro-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonEuropeKeywordPage />;
}
