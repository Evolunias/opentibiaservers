import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-server');
}

export default function ActiveOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-server" />;
}
