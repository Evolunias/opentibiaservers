import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-france-servers');
}

export default function ElderaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-france-servers" />;
}
