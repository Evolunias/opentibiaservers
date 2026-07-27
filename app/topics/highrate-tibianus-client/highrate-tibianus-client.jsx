import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-client');
}

export default function HighrateTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-client" />;
}
