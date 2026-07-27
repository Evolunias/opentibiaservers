import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-private-server');
}

export default function BestTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-private-server" />;
}
