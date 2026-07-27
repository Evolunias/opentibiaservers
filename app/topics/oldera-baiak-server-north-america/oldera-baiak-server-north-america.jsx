import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-north-america');
}

export default function OlderaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-north-america" />;
}
