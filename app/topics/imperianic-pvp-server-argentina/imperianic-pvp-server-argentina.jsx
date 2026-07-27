import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-argentina');
}

export default function ImperianicPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-argentina" />;
}
