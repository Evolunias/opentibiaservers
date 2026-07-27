import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-baiak-server');
}

export default function Nostalther80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-baiak-server" />;
}
