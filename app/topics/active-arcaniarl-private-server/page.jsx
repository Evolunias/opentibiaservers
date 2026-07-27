import ActiveArcaniarlPrivateServerKeywordPage, { generateMetadata } from './active-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlPrivateServerKeywordPage />;
}
