import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp');
}

export default function ElderaPvpKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp" />;
}
