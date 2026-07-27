import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-usa');
}

export default function OxygenotPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-usa" />;
}
