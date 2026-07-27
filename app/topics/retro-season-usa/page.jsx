import RetroSeasonUsaKeywordPage, { generateMetadata } from './retro-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonUsaKeywordPage />;
}
