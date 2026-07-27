import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-poland');
}

export default function OxygenotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-poland" />;
}
