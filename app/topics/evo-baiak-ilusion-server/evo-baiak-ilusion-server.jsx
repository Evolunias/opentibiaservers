import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-baiak-ilusion-server');
}

export default function EvoBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="evo-baiak-ilusion-server" />;
}
