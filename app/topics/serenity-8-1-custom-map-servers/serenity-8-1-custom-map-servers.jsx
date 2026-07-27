import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-custom-map-servers');
}

export default function Serenity81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-custom-map-servers" />;
}
