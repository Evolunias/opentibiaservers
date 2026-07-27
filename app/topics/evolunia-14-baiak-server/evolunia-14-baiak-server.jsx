import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-baiak-server');
}

export default function Evolunia14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-baiak-server" />;
}
