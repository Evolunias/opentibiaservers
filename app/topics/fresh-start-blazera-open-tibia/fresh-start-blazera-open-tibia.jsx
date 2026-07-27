import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-open-tibia');
}

export default function FreshStartBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-open-tibia" />;
}
