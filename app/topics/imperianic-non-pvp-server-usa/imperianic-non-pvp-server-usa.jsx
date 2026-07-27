import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-usa');
}

export default function ImperianicNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-usa" />;
}
