import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-argentina');
}

export default function OxygenotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-argentina" />;
}
