import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-fresh-start-server');
}

export default function Thaisot86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-fresh-start-server" />;
}
