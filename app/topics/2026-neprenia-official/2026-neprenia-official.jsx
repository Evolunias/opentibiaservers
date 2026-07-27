import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-neprenia-official');
}

export default function Keyword2026NepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="2026-neprenia-official" />;
}
