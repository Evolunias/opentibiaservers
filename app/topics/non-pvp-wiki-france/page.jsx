import NonPvpWikiFranceKeywordPage, { generateMetadata } from './non-pvp-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpWikiFranceKeywordPage />;
}
