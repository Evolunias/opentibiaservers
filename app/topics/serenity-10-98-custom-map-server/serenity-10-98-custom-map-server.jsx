import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-custom-map-server');
}

export default function Serenity1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-custom-map-server" />;
}
