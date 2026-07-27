import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-argentina-servers');
}

export default function RealestaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-argentina-servers" />;
}
