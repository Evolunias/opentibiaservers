import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibiantis-server');
}

export default function NonPvpTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibiantis-server" />;
}
