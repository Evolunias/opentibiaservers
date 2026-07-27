import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-baiak-server');
}

export default function Nostalther13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-baiak-server" />;
}
