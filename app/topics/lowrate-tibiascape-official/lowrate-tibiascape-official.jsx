import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-official');
}

export default function LowrateTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-official" />;
}
