import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-fresh-start-server');
}

export default function Thaisot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-fresh-start-server" />;
}
