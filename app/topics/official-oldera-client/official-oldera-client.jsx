import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-client');
}

export default function OfficialOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-client" />;
}
