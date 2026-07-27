import RetroWikiFranceKeywordPage, { generateMetadata } from './retro-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiFranceKeywordPage />;
}
