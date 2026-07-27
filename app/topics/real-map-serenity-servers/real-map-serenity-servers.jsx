import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-servers');
}

export default function RealMapSerenityServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-servers" />;
}
