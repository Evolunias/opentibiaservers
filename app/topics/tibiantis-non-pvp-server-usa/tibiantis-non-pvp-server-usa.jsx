import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-usa');
}

export default function TibiantisNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-usa" />;
}
