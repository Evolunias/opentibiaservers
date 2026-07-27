import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-baiak-server');
}

export default function Nostalther11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-baiak-server" />;
}
