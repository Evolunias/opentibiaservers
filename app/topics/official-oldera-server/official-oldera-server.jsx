import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-server');
}

export default function OfficialOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-server" />;
}
