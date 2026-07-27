import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-private-server');
}

export default function PopularThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-private-server" />;
}
