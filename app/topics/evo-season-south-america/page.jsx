import EvoSeasonSouthAmericaKeywordPage, { generateMetadata } from './evo-season-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonSouthAmericaKeywordPage />;
}
