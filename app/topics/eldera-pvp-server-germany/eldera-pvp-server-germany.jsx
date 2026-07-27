import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-germany');
}

export default function ElderaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-germany" />;
}
