import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-ots');
}

export default function HighrateTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-ots" />;
}
