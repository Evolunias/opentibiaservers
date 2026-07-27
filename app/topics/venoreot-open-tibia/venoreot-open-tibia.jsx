import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-open-tibia');
}

export default function VenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-open-tibia" />;
}
