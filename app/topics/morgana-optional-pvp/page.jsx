import MorganaOptionalPvpKeywordPage, { generateMetadata } from './morgana-optional-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaOptionalPvpKeywordPage />;
}
