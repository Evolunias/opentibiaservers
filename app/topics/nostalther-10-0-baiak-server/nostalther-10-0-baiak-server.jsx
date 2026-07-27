import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-baiak-server');
}

export default function Nostalther100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-baiak-server" />;
}
