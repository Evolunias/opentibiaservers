import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-client');
}

export default function ActiveOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-client" />;
}
