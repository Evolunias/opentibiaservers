import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-argentina');
}

export default function TibiantisPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-argentina" />;
}
