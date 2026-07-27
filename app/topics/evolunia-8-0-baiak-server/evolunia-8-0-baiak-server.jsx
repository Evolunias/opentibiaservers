import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-baiak-server');
}

export default function Evolunia80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-baiak-server" />;
}
