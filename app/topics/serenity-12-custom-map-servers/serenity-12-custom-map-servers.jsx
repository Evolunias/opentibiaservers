import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-custom-map-servers');
}

export default function Serenity12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-custom-map-servers" />;
}
