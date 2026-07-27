import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-client');
}

export default function OtServersClientKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-client" />;
}
