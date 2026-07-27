import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-fresh-start-server');
}

export default function Thaisot14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-fresh-start-server" />;
}
