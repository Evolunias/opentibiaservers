import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-usa');
}

export default function OxygenotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-usa" />;
}
