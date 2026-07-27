import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-chile-servers');
}

export default function LumineraChileServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-chile-servers" />;
}
