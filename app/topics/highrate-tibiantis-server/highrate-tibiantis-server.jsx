import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-server');
}

export default function HighrateTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-server" />;
}
