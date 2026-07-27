import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera');
}

export default function LowrateLumineraKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera" />;
}
