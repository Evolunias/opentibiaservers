import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-13-evo-servers');
}

export default function BaiakIlusion13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-13-evo-servers" />;
}
