import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-argentina-servers');
}

export default function LumineraArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-argentina-servers" />;
}
