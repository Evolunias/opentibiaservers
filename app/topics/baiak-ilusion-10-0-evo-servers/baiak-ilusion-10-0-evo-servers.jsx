import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-10-0-evo-servers');
}

export default function BaiakIlusion100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-10-0-evo-servers" />;
}
