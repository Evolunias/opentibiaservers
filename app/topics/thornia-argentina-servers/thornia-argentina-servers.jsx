import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-argentina-servers');
}

export default function ThorniaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-argentina-servers" />;
}
