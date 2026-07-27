import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-north-america');
}

export default function ElderaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-north-america" />;
}
