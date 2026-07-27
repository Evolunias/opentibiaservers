import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-server');
}

export default function RealMapSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-server" />;
}
