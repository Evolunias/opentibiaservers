import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-europe');
}

export default function OxygenotNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-europe" />;
}
