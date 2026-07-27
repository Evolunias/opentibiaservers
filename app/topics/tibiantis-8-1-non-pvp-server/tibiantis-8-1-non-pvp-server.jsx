import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-non-pvp-server');
}

export default function Tibiantis81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-non-pvp-server" />;
}
