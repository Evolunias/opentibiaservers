import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-fresh-start-server');
}

export default function Thaisot84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-fresh-start-server" />;
}
