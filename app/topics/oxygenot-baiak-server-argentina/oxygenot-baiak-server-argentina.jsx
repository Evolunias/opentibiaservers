import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-argentina');
}

export default function OxygenotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-argentina" />;
}
