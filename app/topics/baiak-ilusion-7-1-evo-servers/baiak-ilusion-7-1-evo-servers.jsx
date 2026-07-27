import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-1-evo-servers');
}

export default function BaiakIlusion71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-1-evo-servers" />;
}
