import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-mexico');
}

export default function OxygenotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-mexico" />;
}
