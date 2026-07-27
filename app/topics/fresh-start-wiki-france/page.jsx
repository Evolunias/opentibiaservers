import FreshStartWikiFranceKeywordPage, { generateMetadata } from './fresh-start-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiFranceKeywordPage />;
}
