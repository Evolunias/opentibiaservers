import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-ots');
}

export default function PopularOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-ots" />;
}
