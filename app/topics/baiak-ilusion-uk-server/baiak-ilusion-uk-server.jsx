import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-uk-server');
}

export default function BaiakIlusionUkServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-uk-server" />;
}
