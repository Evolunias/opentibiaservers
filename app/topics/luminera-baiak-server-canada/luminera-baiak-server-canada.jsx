import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-canada');
}

export default function LumineraBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-canada" />;
}
