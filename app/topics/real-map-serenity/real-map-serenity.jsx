import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity');
}

export default function RealMapSerenityKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity" />;
}
