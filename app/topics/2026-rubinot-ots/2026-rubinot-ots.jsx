import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-rubinot-ots');
}

export default function Keyword2026RubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="2026-rubinot-ots" />;
}
