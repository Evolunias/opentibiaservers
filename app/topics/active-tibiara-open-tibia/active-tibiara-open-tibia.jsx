import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-open-tibia');
}

export default function ActiveTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-open-tibia" />;
}
