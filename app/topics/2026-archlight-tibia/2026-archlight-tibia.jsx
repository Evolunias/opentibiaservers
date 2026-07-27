import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-archlight-tibia');
}

export default function Keyword2026ArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-archlight-tibia" />;
}
