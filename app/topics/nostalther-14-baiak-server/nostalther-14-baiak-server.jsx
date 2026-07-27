import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-baiak-server');
}

export default function Nostalther14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-baiak-server" />;
}
