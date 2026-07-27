import HighrateArcaniarlPrivateServerKeywordPage, { generateMetadata } from './highrate-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlPrivateServerKeywordPage />;
}
