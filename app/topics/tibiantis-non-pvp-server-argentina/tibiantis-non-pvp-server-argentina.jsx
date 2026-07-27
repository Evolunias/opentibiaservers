import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-argentina');
}

export default function TibiantisNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-argentina" />;
}
