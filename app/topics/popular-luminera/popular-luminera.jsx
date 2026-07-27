import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera');
}

export default function PopularLumineraKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera" />;
}
