import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-eternal-odyssey-server');
}

export default function BaiakEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-eternal-odyssey-server" />;
}
