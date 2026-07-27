import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-official');
}

export default function HighrateTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-official" />;
}
