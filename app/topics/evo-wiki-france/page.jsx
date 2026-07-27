import EvoWikiFranceKeywordPage, { generateMetadata } from './evo-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiFranceKeywordPage />;
}
