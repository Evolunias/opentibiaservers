import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-fresh-start-server');
}

export default function Thaisot11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-fresh-start-server" />;
}
