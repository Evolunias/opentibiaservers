import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-open-tibia');
}

export default function TopBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-open-tibia" />;
}
