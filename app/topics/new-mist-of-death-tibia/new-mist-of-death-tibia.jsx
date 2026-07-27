import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-tibia');
}

export default function NewMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-tibia" />;
}
