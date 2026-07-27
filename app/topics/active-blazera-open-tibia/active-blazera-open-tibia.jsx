import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-open-tibia');
}

export default function ActiveBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-open-tibia" />;
}
