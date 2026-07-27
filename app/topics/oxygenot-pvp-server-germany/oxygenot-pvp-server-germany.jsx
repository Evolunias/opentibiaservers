import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-germany');
}

export default function OxygenotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-germany" />;
}
