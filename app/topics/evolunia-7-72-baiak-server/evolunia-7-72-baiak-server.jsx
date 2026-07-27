import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-baiak-server');
}

export default function Evolunia772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-baiak-server" />;
}
