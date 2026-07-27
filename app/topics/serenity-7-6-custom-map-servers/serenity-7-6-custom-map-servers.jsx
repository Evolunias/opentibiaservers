import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-custom-map-servers');
}

export default function Serenity76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-custom-map-servers" />;
}
