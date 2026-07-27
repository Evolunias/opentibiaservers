import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-baiak-server');
}

export default function Nostalther15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-baiak-server" />;
}
