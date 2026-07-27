import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-client');
}

export default function LowrateTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-client" />;
}
