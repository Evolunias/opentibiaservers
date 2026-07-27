import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-ot');
}

export default function RealMapSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-ot" />;
}
