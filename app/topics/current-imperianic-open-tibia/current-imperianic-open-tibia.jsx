import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-open-tibia');
}

export default function CurrentImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-open-tibia" />;
}
