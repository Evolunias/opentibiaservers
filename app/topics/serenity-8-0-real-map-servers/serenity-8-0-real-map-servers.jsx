import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-real-map-servers');
}

export default function Serenity80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-real-map-servers" />;
}
