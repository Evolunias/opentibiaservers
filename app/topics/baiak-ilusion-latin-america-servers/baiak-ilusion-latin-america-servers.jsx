import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-latin-america-servers');
}

export default function BaiakIlusionLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-latin-america-servers" />;
}
