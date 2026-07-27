import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-non-pvp-server');
}

export default function Tibiantis14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-non-pvp-server" />;
}
