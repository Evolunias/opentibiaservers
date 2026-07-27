import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibiascape-server');
}

export default function BaiakTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibiascape-server" />;
}
