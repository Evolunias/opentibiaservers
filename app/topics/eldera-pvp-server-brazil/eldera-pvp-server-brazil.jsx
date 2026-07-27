import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-brazil');
}

export default function ElderaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-brazil" />;
}
