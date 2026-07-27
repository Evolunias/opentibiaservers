import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-tibia');
}

export default function CurrentImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-tibia" />;
}
