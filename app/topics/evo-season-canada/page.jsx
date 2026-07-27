import EvoSeasonCanadaKeywordPage, { generateMetadata } from './evo-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonCanadaKeywordPage />;
}
