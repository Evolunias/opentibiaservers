import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-serenity-server');
}

export default function CustomMapSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-serenity-server" />;
}
