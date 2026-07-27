import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-uk');
}

export default function ElderaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-uk" />;
}
