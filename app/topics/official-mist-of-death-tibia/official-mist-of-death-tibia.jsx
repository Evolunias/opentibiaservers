import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-tibia');
}

export default function OfficialMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-tibia" />;
}
