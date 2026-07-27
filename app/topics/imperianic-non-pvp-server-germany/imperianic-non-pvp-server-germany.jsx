import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-germany');
}

export default function ImperianicNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-germany" />;
}
