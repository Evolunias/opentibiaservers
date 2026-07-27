import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-fresh-start-server');
}

export default function Empirebr14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-fresh-start-server" />;
}
