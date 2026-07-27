import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-tibia');
}

export default function ActiveMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-tibia" />;
}
