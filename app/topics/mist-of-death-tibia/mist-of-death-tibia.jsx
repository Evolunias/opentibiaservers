import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-tibia');
}

export default function MistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-tibia" />;
}
