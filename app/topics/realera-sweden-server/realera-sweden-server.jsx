import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-sweden-server');
}

export default function RealeraSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="realera-sweden-server" />;
}
