import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-open-tibia');
}

export default function ActiveOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-open-tibia" />;
}
