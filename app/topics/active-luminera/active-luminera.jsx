import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera');
}

export default function ActiveLumineraKeywordPage() {
  return <StaticKeywordPage slug="active-luminera" />;
}
