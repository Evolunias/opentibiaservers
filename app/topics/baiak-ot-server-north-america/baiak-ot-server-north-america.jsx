import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-north-america');
}

export default function BaiakOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-north-america" />;
}
