import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-mexico-servers');
}

export default function BaiakIlusionMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-mexico-servers" />;
}
