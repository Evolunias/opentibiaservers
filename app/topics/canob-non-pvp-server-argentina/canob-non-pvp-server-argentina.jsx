import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-non-pvp-server-argentina');
}

export default function CanobNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-non-pvp-server-argentina" />;
}
