import PvpeArcaniarlServerKeywordPage, { generateMetadata } from './pvpe-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeArcaniarlServerKeywordPage />;
}
