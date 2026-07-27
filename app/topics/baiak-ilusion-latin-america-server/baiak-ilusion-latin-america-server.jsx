import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-latin-america-server');
}

export default function BaiakIlusionLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-latin-america-server" />;
}
