import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-custom-map-servers');
}

export default function Serenity14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-custom-map-servers" />;
}
