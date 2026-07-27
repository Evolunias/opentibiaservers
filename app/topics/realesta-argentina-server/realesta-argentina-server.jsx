import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-argentina-server');
}

export default function RealestaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-argentina-server" />;
}
