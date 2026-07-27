import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-germany');
}

export default function OxygenotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-germany" />;
}
