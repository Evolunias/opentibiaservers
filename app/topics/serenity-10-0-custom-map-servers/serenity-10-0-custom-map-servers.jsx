import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-custom-map-servers');
}

export default function Serenity100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-custom-map-servers" />;
}
