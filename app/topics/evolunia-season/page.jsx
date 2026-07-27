import EvoluniaSeasonKeywordPage, { generateMetadata } from './evolunia-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSeasonKeywordPage />;
}
