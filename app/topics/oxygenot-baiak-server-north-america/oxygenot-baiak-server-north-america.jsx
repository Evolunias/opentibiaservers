import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-north-america');
}

export default function OxygenotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-north-america" />;
}
