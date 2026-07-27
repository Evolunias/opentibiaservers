import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-ots');
}

export default function RealMapSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-ots" />;
}
