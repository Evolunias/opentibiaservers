import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-real-map-servers');
}

export default function Serenity71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-real-map-servers" />;
}
