import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-xanteria-official');
}

export default function Keyword2026XanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="2026-xanteria-official" />;
}
