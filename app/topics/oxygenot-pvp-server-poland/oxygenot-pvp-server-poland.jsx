import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-poland');
}

export default function OxygenotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-poland" />;
}
