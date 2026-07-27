import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-evo-servers');
}

export default function BaiakIlusion12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-evo-servers" />;
}
