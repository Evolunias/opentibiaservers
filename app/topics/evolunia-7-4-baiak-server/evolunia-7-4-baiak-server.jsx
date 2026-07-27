import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-baiak-server');
}

export default function Evolunia74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-baiak-server" />;
}
