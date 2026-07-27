import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-argentina');
}

export default function CanobPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-argentina" />;
}
