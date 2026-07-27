import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-blazera-server');
}

export default function NonPvpBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-blazera-server" />;
}
