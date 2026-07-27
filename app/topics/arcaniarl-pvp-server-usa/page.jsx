import ArcaniarlPvpServerUsaKeywordPage, { generateMetadata } from './arcaniarl-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPvpServerUsaKeywordPage />;
}
