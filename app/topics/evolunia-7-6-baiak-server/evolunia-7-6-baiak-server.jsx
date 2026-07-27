import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-baiak-server');
}

export default function Evolunia76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-baiak-server" />;
}
