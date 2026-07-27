import ArcaniarlPvpKeywordPage, { generateMetadata } from './arcaniarl-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPvpKeywordPage />;
}
