import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-0-fresh-start-server');
}

export default function BaiakIlusion80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-0-fresh-start-server" />;
}
