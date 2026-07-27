import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-europe');
}

export default function OxygenotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-europe" />;
}
