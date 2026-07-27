import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-poland-server');
}

export default function LumineraPolandServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-poland-server" />;
}
