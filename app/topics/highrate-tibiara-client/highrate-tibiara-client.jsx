import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-client');
}

export default function HighrateTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-client" />;
}
