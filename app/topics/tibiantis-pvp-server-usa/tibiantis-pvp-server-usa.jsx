import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-usa');
}

export default function TibiantisPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-usa" />;
}
