import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-mexico-server');
}

export default function BaiakIlusionMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-mexico-server" />;
}
