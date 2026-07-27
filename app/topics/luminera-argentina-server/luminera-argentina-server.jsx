import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-argentina-server');
}

export default function LumineraArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-argentina-server" />;
}
