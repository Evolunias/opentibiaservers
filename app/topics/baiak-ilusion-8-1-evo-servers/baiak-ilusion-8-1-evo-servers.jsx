import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-1-evo-servers');
}

export default function BaiakIlusion81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-1-evo-servers" />;
}
