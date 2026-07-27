import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-baiak-server');
}

export default function Nostalther12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-baiak-server" />;
}
