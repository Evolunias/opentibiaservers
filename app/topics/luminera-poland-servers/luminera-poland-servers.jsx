import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-poland-servers');
}

export default function LumineraPolandServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-poland-servers" />;
}
