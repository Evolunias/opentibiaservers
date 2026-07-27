import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera');
}

export default function BestLumineraKeywordPage() {
  return <StaticKeywordPage slug="best-luminera" />;
}
