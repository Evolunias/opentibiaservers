import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-open-tibia');
}

export default function CustomBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-open-tibia" />;
}
