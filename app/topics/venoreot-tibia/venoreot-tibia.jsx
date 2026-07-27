import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-tibia');
}

export default function VenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-tibia" />;
}
