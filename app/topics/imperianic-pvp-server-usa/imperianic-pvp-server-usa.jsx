import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-usa');
}

export default function ImperianicPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-usa" />;
}
