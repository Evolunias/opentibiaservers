import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-serenity-servers');
}

export default function CustomMapSerenityServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-serenity-servers" />;
}
