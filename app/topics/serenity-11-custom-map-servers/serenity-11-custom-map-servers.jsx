import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-custom-map-servers');
}

export default function Serenity11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-custom-map-servers" />;
}
