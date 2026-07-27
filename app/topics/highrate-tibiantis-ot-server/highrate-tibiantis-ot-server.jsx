import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-ot-server');
}

export default function HighrateTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-ot-server" />;
}
