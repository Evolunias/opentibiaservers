import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-rubinot-official');
}

export default function Keyword2026RubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="2026-rubinot-official" />;
}
