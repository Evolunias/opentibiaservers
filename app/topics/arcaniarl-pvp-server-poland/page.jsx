import ArcaniarlPvpServerPolandKeywordPage, { generateMetadata } from './arcaniarl-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPvpServerPolandKeywordPage />;
}
