import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-open-tibia');
}

export default function CustomRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-open-tibia" />;
}
