import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-baiak-server');
}

export default function Evolunia12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-baiak-server" />;
}
