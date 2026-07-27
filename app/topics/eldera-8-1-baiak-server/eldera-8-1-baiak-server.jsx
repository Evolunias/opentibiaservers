import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-baiak-server');
}

export default function Eldera81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-baiak-server" />;
}
