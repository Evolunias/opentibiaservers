import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-custom-map-servers');
}

export default function Serenity13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-custom-map-servers" />;
}
