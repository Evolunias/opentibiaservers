import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-client');
}

export default function OtServerListClientKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-client" />;
}
