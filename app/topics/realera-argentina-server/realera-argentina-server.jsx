import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-argentina-server');
}

export default function RealeraArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="realera-argentina-server" />;
}
