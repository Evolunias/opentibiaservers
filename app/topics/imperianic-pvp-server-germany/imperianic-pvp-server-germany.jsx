import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-germany');
}

export default function ImperianicPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-germany" />;
}
