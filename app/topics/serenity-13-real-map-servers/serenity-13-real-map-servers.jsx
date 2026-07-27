import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-real-map-servers');
}

export default function Serenity13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-real-map-servers" />;
}
