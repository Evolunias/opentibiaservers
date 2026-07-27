import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-sweden-servers');
}

export default function RealeraSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="realera-sweden-servers" />;
}
