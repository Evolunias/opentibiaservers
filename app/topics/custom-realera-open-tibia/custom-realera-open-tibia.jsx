import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-open-tibia');
}

export default function CustomRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-open-tibia" />;
}
