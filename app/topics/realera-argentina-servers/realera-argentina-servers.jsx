import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-argentina-servers');
}

export default function RealeraArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="realera-argentina-servers" />;
}
