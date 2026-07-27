import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-canada');
}

export default function TibiantisPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-canada" />;
}
