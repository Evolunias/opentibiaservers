import RetroSeasonSouthAmericaKeywordPage, { generateMetadata } from './retro-season-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonSouthAmericaKeywordPage />;
}
