import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-canada');
}

export default function MiracleBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-canada" />;
}
