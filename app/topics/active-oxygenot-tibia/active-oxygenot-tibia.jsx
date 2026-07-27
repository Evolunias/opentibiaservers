import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-tibia');
}

export default function ActiveOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-tibia" />;
}
