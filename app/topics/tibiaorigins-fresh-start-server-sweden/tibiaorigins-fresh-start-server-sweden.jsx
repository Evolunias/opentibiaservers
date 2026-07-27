import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-sweden');
}

export default function TibiaoriginsFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-sweden" />;
}
