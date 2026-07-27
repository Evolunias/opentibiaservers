import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-non-pvp-server');
}

export default function Tibiantis13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-non-pvp-server" />;
}
