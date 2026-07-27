import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-client');
}

export default function HighrateTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-client" />;
}
