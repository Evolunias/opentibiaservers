import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria');
}

export default function RealMapXanteriaKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria" />;
}
