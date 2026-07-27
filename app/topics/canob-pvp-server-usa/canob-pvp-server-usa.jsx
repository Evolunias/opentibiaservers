import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-usa');
}

export default function CanobPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-usa" />;
}
