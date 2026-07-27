import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-fresh-start-server');
}

export default function BaiakIlusion12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-fresh-start-server" />;
}
