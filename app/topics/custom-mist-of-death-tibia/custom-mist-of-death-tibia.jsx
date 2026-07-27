import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-tibia');
}

export default function CustomMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-tibia" />;
}
