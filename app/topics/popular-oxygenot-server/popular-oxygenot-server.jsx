import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-server');
}

export default function PopularOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-server" />;
}
