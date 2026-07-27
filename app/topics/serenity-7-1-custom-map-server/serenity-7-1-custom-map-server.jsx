import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-custom-map-server');
}

export default function Serenity71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-custom-map-server" />;
}
