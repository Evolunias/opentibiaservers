import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-north-america');
}

export default function RealestaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-north-america" />;
}
