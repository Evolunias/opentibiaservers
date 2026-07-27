import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-baiak-server');
}

export default function Nostalther81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-baiak-server" />;
}
