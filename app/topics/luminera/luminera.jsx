import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera');
}

export default function LumineraKeywordPage() {
  return <StaticKeywordPage slug="luminera" />;
}
