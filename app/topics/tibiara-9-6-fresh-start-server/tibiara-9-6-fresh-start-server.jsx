import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-fresh-start-server');
}

export default function Tibiara96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-fresh-start-server" />;
}
