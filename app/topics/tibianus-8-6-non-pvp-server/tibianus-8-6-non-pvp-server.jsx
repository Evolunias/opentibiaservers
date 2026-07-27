import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-non-pvp-server');
}

export default function Tibianus86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-non-pvp-server" />;
}
