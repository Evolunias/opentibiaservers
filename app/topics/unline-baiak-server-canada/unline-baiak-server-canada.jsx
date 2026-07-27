import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-canada');
}

export default function UnlineBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-canada" />;
}
