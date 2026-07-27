import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-tibia');
}

export default function HighrateTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-tibia" />;
}
