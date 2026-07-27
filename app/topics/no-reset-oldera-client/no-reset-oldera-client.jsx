import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-client');
}

export default function NoResetOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-client" />;
}
