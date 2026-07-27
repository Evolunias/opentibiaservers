import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-fresh-start-server');
}

export default function BaiakIlusion15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-fresh-start-server" />;
}
