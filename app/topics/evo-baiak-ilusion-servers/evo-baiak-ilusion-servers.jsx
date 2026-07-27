import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-baiak-ilusion-servers');
}

export default function EvoBaiakIlusionServersKeywordPage() {
  return <StaticKeywordPage slug="evo-baiak-ilusion-servers" />;
}
