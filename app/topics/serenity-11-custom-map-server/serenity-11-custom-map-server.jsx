import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-custom-map-server');
}

export default function Serenity11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-custom-map-server" />;
}
