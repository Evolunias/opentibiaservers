import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-north-america');
}

export default function BlazeraBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-north-america" />;
}
