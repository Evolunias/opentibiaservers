import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-baiak-server');
}

export default function Evolunia84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-baiak-server" />;
}
