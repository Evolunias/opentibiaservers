import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-ot-server');
}

export default function PopularOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-ot-server" />;
}
