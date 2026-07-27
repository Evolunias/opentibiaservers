import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-open-tibia');
}

export default function ActiveMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-open-tibia" />;
}
