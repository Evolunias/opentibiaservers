import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-open-tibia');
}

export default function HighrateTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-open-tibia" />;
}
