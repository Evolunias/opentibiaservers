import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera');
}

export default function TopLumineraKeywordPage() {
  return <StaticKeywordPage slug="top-luminera" />;
}
