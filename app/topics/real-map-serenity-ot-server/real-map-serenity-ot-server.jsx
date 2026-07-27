import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-ot-server');
}

export default function RealMapSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-ot-server" />;
}
