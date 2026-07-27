import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-custom-map-servers');
}

export default function Serenity86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-custom-map-servers" />;
}
