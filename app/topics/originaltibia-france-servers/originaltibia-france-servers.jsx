import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-france-servers');
}

export default function OriginaltibiaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-france-servers" />;
}
