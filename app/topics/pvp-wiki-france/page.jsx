import PvpWikiFranceKeywordPage, { generateMetadata } from './pvp-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiFranceKeywordPage />;
}
