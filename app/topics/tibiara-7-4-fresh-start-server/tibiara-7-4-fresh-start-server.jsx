import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-fresh-start-server');
}

export default function Tibiara74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-fresh-start-server" />;
}
