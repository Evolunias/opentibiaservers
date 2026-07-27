import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-server');
}

export default function NovaServerKeywordPage() {
  return <StaticKeywordPage slug="nova-server" />;
}
