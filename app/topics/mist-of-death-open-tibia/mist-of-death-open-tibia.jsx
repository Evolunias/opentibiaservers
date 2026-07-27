import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-open-tibia');
}

export default function MistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-open-tibia" />;
}
