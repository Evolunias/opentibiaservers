import RetroSeasonNorthAmericaKeywordPage, { generateMetadata } from './retro-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonNorthAmericaKeywordPage />;
}
