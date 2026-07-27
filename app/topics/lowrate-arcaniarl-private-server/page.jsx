import LowrateArcaniarlPrivateServerKeywordPage, { generateMetadata } from './lowrate-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlPrivateServerKeywordPage />;
}
