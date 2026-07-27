import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-argentina-server');
}

export default function ThorniaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-argentina-server" />;
}
