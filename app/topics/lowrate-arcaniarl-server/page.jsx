import LowrateArcaniarlServerKeywordPage, { generateMetadata } from './lowrate-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlServerKeywordPage />;
}
