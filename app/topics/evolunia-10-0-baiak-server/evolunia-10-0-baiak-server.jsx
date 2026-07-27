import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-baiak-server');
}

export default function Evolunia100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-baiak-server" />;
}
