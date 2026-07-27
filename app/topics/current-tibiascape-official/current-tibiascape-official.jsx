import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-official');
}

export default function CurrentTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-official" />;
}
