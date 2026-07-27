import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera');
}

export default function CurrentLumineraKeywordPage() {
  return <StaticKeywordPage slug="current-luminera" />;
}
