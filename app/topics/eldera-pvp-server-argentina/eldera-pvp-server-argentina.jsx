import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-argentina');
}

export default function ElderaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-argentina" />;
}
