import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-real-map-server');
}

export default function Serenity84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-real-map-server" />;
}
