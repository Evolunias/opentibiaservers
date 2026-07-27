import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-fresh-start-server');
}

export default function BaiakIlusion11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-fresh-start-server" />;
}
