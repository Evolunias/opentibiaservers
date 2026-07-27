import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera');
}

export default function FreshStartLumineraKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera" />;
}
