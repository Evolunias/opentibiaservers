import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-france-server');
}

export default function ElderaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-france-server" />;
}
