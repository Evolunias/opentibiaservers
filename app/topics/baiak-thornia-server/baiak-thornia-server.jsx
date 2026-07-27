import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-thornia-server');
}

export default function BaiakThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-thornia-server" />;
}
