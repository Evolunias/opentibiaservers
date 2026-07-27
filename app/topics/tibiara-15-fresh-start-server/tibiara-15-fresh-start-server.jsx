import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-fresh-start-server');
}

export default function Tibiara15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-fresh-start-server" />;
}
