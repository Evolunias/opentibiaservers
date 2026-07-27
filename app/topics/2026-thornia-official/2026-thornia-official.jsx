import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-thornia-official');
}

export default function Keyword2026ThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="2026-thornia-official" />;
}
