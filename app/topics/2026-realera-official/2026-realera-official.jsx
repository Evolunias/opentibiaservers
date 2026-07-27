import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-realera-official');
}

export default function Keyword2026RealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="2026-realera-official" />;
}
