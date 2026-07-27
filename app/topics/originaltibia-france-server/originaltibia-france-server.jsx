import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-france-server');
}

export default function OriginaltibiaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-france-server" />;
}
