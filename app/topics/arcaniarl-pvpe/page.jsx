import ArcaniarlPvpeKeywordPage, { generateMetadata } from './arcaniarl-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPvpeKeywordPage />;
}
