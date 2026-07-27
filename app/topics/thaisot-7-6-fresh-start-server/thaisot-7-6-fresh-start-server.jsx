import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-fresh-start-server');
}

export default function Thaisot76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-fresh-start-server" />;
}
