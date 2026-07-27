import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-custom-map-server');
}

export default function Serenity81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-custom-map-server" />;
}
