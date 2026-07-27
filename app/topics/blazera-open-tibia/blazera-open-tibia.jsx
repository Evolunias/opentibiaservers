import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-open-tibia');
}

export default function BlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="blazera-open-tibia" />;
}
