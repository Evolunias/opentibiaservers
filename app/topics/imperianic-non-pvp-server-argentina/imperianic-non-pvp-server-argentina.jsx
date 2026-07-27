import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-argentina');
}

export default function ImperianicNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-argentina" />;
}
