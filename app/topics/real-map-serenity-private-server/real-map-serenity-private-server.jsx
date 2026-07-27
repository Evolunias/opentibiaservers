import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-private-server');
}

export default function RealMapSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-private-server" />;
}
