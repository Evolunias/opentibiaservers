import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-ot');
}

export default function HighrateTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-ot" />;
}
