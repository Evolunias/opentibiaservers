import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-fresh-start-server');
}

export default function Tibiara13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-fresh-start-server" />;
}
