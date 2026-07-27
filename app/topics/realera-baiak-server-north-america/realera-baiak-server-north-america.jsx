import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-north-america');
}

export default function RealeraBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-north-america" />;
}
