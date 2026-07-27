import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-usa');
}

export default function OxygenotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-usa" />;
}
