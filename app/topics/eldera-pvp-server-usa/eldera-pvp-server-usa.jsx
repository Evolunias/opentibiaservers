import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-usa');
}

export default function ElderaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-usa" />;
}
