import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-official');
}

export default function PopularOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-official" />;
}
