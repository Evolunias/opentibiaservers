import EvoSeasonUsaKeywordPage, { generateMetadata } from './evo-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonUsaKeywordPage />;
}
