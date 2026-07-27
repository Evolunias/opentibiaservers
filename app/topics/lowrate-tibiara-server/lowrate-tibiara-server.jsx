import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-server');
}

export default function LowrateTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-server" />;
}
