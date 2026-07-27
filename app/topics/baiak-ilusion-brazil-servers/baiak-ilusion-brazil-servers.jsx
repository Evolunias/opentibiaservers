import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-brazil-servers');
}

export default function BaiakIlusionBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-brazil-servers" />;
}
