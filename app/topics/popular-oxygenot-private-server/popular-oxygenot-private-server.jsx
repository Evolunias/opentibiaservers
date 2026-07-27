import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-private-server');
}

export default function PopularOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-private-server" />;
}
