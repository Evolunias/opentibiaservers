import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-fresh-start-server');
}

export default function Thaisot74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-fresh-start-server" />;
}
