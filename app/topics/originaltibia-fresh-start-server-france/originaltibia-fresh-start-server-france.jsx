import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-fresh-start-server-france');
}

export default function OriginaltibiaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-fresh-start-server-france" />;
}
