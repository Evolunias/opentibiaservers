import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-nostalther-server');
}

export default function BaiakNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-nostalther-server" />;
}
